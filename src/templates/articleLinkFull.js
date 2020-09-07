module.exports = (o) => `
<div class="container">
  <div class="row no-gutters">
    <div class="col">
      <div class="el-article-link">
        <div class="el-article-link__image"
          style="background-image: url(${o.image1})">
        </div>
        <div class="el-article-link__overlay">
          <div class="el-article-link__content">
            <div class="tag">
            ${o.tag1}
            </div>
            <div class="heading">
            ${o.heading1}
            </div>
            <a href="${o.link1}" class="btn btn-outline-light stretched-link">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
