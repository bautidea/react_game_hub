import noImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp';

// In this module we are modifying the url of the request we use to obtain the
// images, because they are way too big and that can be a problem when loading the
// app, so we are going to reduce the size of the img.

export function getCroppedImageUrl(url: string) {
  // If the url that we are passing doesnt have an img, we are going to return
  // a Image Placeholder.
  if (!url) return noImage;

  // Here we are obtaining the index of where the word 'media/' is located
  // the size of the image can be adjusted, for example here
  // https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg
  const target = 'media/';
  // Since indexOf returns the index of the beginning of the string we have to add
  // its length so we can add the size after '/'.
  const index = url.indexOf(target) + target.length;

  // Slicing the string until media, then appending size, and then pasting the remaining
  // url.
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
