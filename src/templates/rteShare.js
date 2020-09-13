module.exports = (o) => `
<div class="el-rte ${(o.lead ? 'el-rte--lead' : '')}">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-md-8 col-lg-6">
        <div class="el-rte__content">
          ${o.body}
        </div>
      </div>
      <div class="col-md-4 col-lg-4">
        <div class="el-rte__content">
          <a href="#" class="share-page-link">Share</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
