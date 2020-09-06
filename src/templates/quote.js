module.exports = (o) => `
<div class="el-quote">
  <div class="container">
    <div class="el-quote__content"
      style="background-color: ${o.backgroundColor}">
      <div class="quote">
        ${o.body}
      </div>
      <p class="attribution">
        ${o.attribution}
      </p>
    </div>
  </div>
</div>
`;
