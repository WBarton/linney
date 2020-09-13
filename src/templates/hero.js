module.exports = (o) => `
<div class="el-hero">
  <div class="el-hero__image"
    style="background-image: url(${o.image})">
  </div>
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

