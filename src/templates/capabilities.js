module.exports = (o) => `
<div class="el-hero--text">
  <div class="container">
    <h1>
      Our work in
      <br>
      your world
    </h1>
  </div>
</div>

<div class="el-rte el-rte--lead">
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-lg-6">
        <div class="el-rte__content">
          <p>
            Every marketing challenge is different because every brand is different. We start each new project by
            discovering all we can about your customers, your marketplace and your business.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="el-tabs mb-4">
  <div class="container">
    <ul class="nav nav-fill mb-3" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-featured" role="tab"
          aria-selected="true">Featured</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-digital" role="tab"
          aria-selected="false">Digital</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-print" role="tab"
          aria-selected="false">Print</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-insights" role="tab"
          aria-selected="false">Insights</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-film-animation" role="tab"
          aria-selected="false">Film/animation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-retail" role="tab"
          aria-selected="false">Retail</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-events" role="tab"
          aria-selected="false">Events</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-featured">
        <div class="row no-gutters" id="listFeatured">
          <div class="col-sm-6 col-md-4" v-for="f in this.featured">
            <div class="el-article-link">
              <div class="el-article-link__image" :style="'background-image: url(' + f.image + ')'">
              </div>
              <div class="el-article-link__overlay">
                <div class="el-article-link__content">
                  <div class="tag">
                    {{f.tag}}
                  </div>
                  <div class="heading">
                    {{f.name}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="pills-digital">

      </div>
    </div>
  </div>
</div>
`;

