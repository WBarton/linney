module.exports = (o) => `
<div class="el-hero">
  <video class="el-hero__video" poster="${o.image}" autoplay muted loop>
    <source src="${o.video}" type="video/mp4">
  </video>
  <div class="container">
    <div class="el-hero__overlay">
      <div class="el-hero__content">
        <h1>
          ${o.h1}
        </h1>
      </div>
    </div>
  </div>
</div>
`;

