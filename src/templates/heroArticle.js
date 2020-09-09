module.exports = (o) => `
<div class="el-hero-article">
  <img src="${o.image}" class="img-fluid">
  <div class="container">
    <div class="el-hero__content">
      <h1>
        ${o.h1}
      </h1>
      <div class="">
        ${o.body}
      </div>
    </div>
  </div>
</div>
`;
