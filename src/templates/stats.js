module.exports = (o) => `
<div class="el-stats-row">
  <div class="container">
    <div class="row">
    ${o.stats
      .map(i => `
      <div class="col-md-4">
        <div class="el-stat">
          <div class="el-stat__stat">
            ${i.stat}
          </div>
          <p>
            ${i.desc}
          </p>
        </div>
      </div>
      `)
      .join('')}
    </div>
  </div>
</div>
`;
