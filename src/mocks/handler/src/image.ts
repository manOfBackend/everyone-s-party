import { rest } from 'msw';

const getImage = rest.get('/images/:imageId', async (req, res, ctx) => {
  const { imageId } = req.params;

  const imageBuffer = await fetch(`./imgs/${imageId}.jpeg`).then((r) => r.arrayBuffer());
  return res(
    ctx.set('Content-Length', imageBuffer.byteLength.toString()),
    ctx.set('Content-Type', 'image/jpeg'),
    ctx.body(imageBuffer),
  );
});

export default {
  getImage,
};
