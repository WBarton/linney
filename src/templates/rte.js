module.exports = (o) => `
<div class="el-rte ${(o.lead ? 'el-rte--lead' : '')}">
  <div class="container">
    <div class="el-rte__content">
      ${o.body}
    </div>
  </div>
</div>
`;
