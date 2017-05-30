# testtheme

Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes` and your sass in `_sass`. To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

Lisa experiments with BIG THEMES, like some sort of turn of the century novelist.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "testtheme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: testtheme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install testtheme

## Usage

You can make a few simple updates, add your docs, and have a site up and running, or you can make more extensive customizations.

As with all gem-based Jekyll themes, the theme's layouts,  base styles, and include files like footers are stored in the theme-gem, hidden from your immediate view, though you can override any theme file by creating a file of the same name in your project. You can learn more about gem-based themes in the Jekyll [Themes](http://jekyllrb.com/docs/themes/) guide, including how to find, open, and override theme files.

### Layouts

The theme provides some basic layouts for you to use. Specify the appropriate layout in each new content file's Jekyll frontmatter to get the right headers, footers, navs, and so on:

* `docs`: This is probably the most common layout you'll use, designed for all kinds of docs. Use with the `markdown` type for default styling for Markdown docs pages.
```
---
layout: docs
type: markdown
---
```

* `faq`: Use for FAQs.
* `landing`: Use for landing pages.
* `blog`: Use for your main blog page.
* `post`: Use for blog posts.
* `community`: Use for your community page.
* `about`: Use for your "about" page.

#### Types

The `type` value lets you further specify the styling you want to be used for a particular layout. If you're creating regular doc pages in Markdown, use the `markdown` type.


### Images

Add images, including your project logo in `/assets/img/`. Save your project logo as `/assets/img/logo.png`.

### Style

You can update site colors directly in `/assets/css/styles.scss`.

For any other style updates, you'll need to override the relevant CSS in the theme styles (included in styles.scss): you can override any CSS rule in styles.scss, as indicated. To see what rules you'll need to override for particular style changes, see the files in the theme's `_sass` directory.

### Navigation

Nav bars for docs are autogenerated based on your file structure. So, for example, if you have docs in your_site_home/docs/tasks/foo and your_site_home/docs/tasks/bar, you'll get a Tasks left nav within Docs with two items, Foo and Bar.  Each doc should have a `title`, an `overview`, and an `order` value in its frontmatter for populating the nav bars and other autogenerated content:

```
---
title: Overview
overview: Provides a conceptual overview of Foo when used with Bar.
                
order: 0

layout: docs
type: markdown
---
```

Docs will appear in the relevant nav in order of their `order` value.

### Other material

Use the `_config.yml` file to specify your project name, search engine, links to your Github project, and more - this information is used to populate your site's landing page, headers, and footers.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/whereeverIputthis. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

