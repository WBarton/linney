module.exports = (o) => `
<div class="el-media el-media--image">
  <div class="${(o.fullWidth) ? '' : 'container'}">
    <img src="${o.image}" class="img-fluid">
  </div>
</div>
`;
