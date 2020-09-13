module.exports = (o) => `
<div class="el-rte ${(o.lead ? 'el-rte--lead' : '')}">
  <div class="container">
    <div class="row ${(o.alt) ? 'justify-content-end' : ''}">
      <div class="col-md-8 col-lg-6">
        <div class="el-rte__content">
          ${o.body}
        </div>
      </div>
    </div>
  </div>
</div>
`;
