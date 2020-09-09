module.exports = (o) => `
<div class="el-quote ${(o.spaced) ? 'el-quote--spaced' : ''} ${(o.small) ? 'el-quote--small' : ''}">
  <div class="container">
    <div class="el-quote__content ${(o.textDark) ? 'text-dark' : ''}"
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
