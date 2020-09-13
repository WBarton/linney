module.exports = (o) => `
<div class="el-hero-article">
  <div class="el-hero-article__image"
    style="background-image: url(${o.image})">
  </div>
  <div class="el-hero-article__overlay">
    <div class="container">
      <div class="el-hero-article__content">
        <div class="tag">
          ${o.tag}
        </div>
        <h1>
          ${o.h1}
        </h1>
        <div class="body">
          ${o.body}
        </div>
      </div>
    </div>
  </div>
</div>
`;
