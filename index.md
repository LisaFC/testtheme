---
layout: landing
title: Template Site
---

{% include home.html %}

<div class="nav-hero-container">
    <div class="hero">
        <div class="container">
            <h1 class="hero-lead">{{site.project_desc}}</h1>
        </div>
    </div>
</div>
<section class="hero-wrapper">
    <div class="jumbotron traffic">
        <div class="container-fluid">
            <img class="landing-image pull-left" src="{{home}}/assets/img/" alt="Nice picture">
            <div class="section-content">
                <h2>Lovely benefit!</h2>
                <p>
                    You cannot imagine how many lovely benefits you will get from this lovely template.
                </p>
                <a href=""><button class="btn btn-istio btn-read-more">READ MORE</button></a>
            </div>
        </div>
    </div>
</section>

<section class="hero-wrapper">
    <div class="jumbotron resilience">
        <div class="container-fluid">
            <img class="landing-image pull-right" src="{{home}}/assets/img/" alt="More nice picture">
            <div class="section-content">
                <h2>Another lovely benefit!</h2>
                <p>You can put in lots of these.</p>
                <a href="{{home}}/about"><button class="btn btn-istio btn-read-more">READ MORE</button></a>
            </div>
        </div>
    </div>
</section>

<div id="doc-call" class="container-fluid doc-call-container ">
    <div class="row doc-call-row">
        <div class="col-md-10 nofloat center-block">
            <div class="col-sm-9 text-center nofloat center-block">
                <h2 class="doc-call-title">Want to learn more?</h2>
                <p class="doc-call-text">{{site.doc_call}}</p>
                <a href="{{home}}/docs"><button class="btn btn-istio">GET STARTED</button></a>
            </div>
        </div>
    </div>
</div>
