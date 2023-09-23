export const getImageUrl = (path)=>{
    return new URL(`/assets/${path}`, import.meta.url).href;
};
//makes it easier to import images from the asset folder