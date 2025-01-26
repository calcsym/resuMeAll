import supabase, { supabaseUrl } from './supabase';

export async function getProfiles() {
  const { data, error } = await supabase.from('cabins').select('*');
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error('Profiles could not be loaded');
  }

  return data;
}

export async function createEditProfile(newProfile, id) {
  const hasImagePath = newProfile.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newProfile.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newProfile.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from('cabins');

  // A) CREATE
  if (!id) query = query.insert([{ ...newProfile, image: imagePath }]);

  // B) EDIT
  if (id)
    query = query.update({ ...newProfile, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Profile could not be created');
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newProfile.image);

  // 3. Delete the profile IF there was an error uplaoding image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Profile image could not be uploaded and the profile was not created'
    );
  }

  return data;
}

export async function deleteProfile(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Profile could not be deleted');
  }

  return data;
}
