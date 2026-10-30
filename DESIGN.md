---
name: Veritas Lava Jato
description: Automotive care expressed through real photography, graphite surfaces and confident red accents.
colors:
  primary: "#e32632"
  primary-hover: "#bd1823"
  bg: "#0b0c0d"
  surface: "#17191b"
  raised: "#25282b"
  line: "#383b3f"
  text: "#f4f3ef"
  muted: "#bfc1c4"
  paper: "#e2e3e4"
  ink: "#17191b"
  paper-muted: "#4f5358"
  paper-line: "#b9bdc0"
  delivery: "#b9202d"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(44px,4.5vw,64px)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-.02em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(42px,4.1vw,58px)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-.02em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  control: "4px"
  compact: "3px"
  floating: "5px"
spacing:
  gutter: "clamp(22px,4.5vw,72px)"
  section: "clamp(72px,7.5vw,108px)"
  button: "15px 22px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#fff"
    rounded: "{rounded.control}"
    padding: "{spacing.button}"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "{spacing.button}"
  filter-selected:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.compact}"
    padding: "10px 21px"
---

# Design System: Veritas Lava Jato

## Overview

**Creative North Star: "The Detail Workshop"**

Real vehicles and the physical workshop lead the experience. Near-black, graphite, silver and red express the automotive identity; condensed headings sit at a human scale beside readable supporting copy and direct contact actions.

The opening gives the photograph more space than the invitation alongside it. Practical visit information follows immediately. Silver service menus, an uneven photographic gallery, a red delivery rate sheet, an open promotion composition and staggered workshop photographs create distinct reading rhythms without decorative overlays.

**Key Characteristics:**
- Real service photography comes first.
- Compact condensed headings and readable supporting text.
- Silver information surfaces and a red commercial delivery region.
- Ruled menus, open compositions and restrained movement.

## Colors

Graphite and silver provide the neutral structure; red marks primary contact actions and the delivery offer.

### Primary
- **Workshop Red** (`primary`): primary contact actions and selection color.
- **Deep Workshop Red** (`primary-hover`): primary action hover state.
- **Delivery Red** (`delivery`): the delivery region, paired with white text and a white contact button.

### Neutral
- **Near Black** (`bg`): page canvas, gallery and sticky header.
- **Graphite** (`surface`): about region, media backing and mobile navigation.
- **Raised Graphite** (`raised`): hover treatments and gift labels.
- **Steel Rule** (`line`): dark-surface separators.
- **Silver White** (`text`): principal type and selected filters.
- **Soft Silver** (`muted`): supporting text on dark surfaces.
- **Silver Paper** (`paper`): service and contact regions.
- **Dark Ink** (`ink`): primary type on silver.
- **Paper Gray** (`paper-muted`): supporting copy on silver.
- **Paper Rule** (`paper-line`): separators on silver.

**The Accent Has a Job Rule.** Use red for contact actions and the delivery offer within the black, graphite and silver identity.

## Typography

**Display Font:** Barlow Condensed, sans-serif; locally served at weights 500, 600 and 700. Headings use weight 500.

**Body Font:** Manrope, Arial, sans-serif; locally served at weights 400, 500, 600 and 700.

**Character:** Narrow display type gives the headings presence while leaving space for photography. Body typography is open and readable; the hero heading stays subordinate to the photograph.

### Hierarchy
- **Display:** hero title uses the frontmatter display token and a desktop maximum width of 13ch. It resolves to 54px at 1100px, 46px at 900px and 42px at 360px.
- **Headline:** section titles use the headline token. Mobile headings use 44px; delivery uses a larger, tightly led treatment.
- **Title:** Manrope semibold titles use the title token; service titles use 20px on desktop.
- **Body:** the body token supplies the base. Descriptions commonly use 14–15px, with 1.8 leading in the hero and service menu.
- **Label:** bold 14px buttons and semibold 13px desktop navigation. Captions and fine print use 12px supporting text.

## Layout

The centered container is `min(calc(100% - var(--gutter)*2),1320px)`. Fluid gutters and section spacing use the frontmatter tokens. The desktop hero uses a 1.7:1 photograph-to-copy grid; the image is 560px tall. A three-column visit strip follows immediately. Services combine an introduction and photograph with a two-column text menu. The gallery uses four columns with alternating two-column images. Delivery is a two-column region with vertical price rows. Promotion uses an open 1.4:.8 composition. About uses a staggered photo pair, while contact gives its large address a 1.3:1 layout.

Breakpoints are 1100px, 900px, 760px and 360px, plus a wide-screen image adjustment at 1600px. Navigation switches to a menu at 900px. The gallery becomes two columns there. At 900px, the hero photograph spans the width above a two-column heading and contact area. At 760px, the hero copy becomes a single column, visit information becomes a single column, delivery and promotion stack, and contact becomes a single column. Services remain a two-column text menu after their introduction; they become one column at 360px. Mobile section spacing is 64px. The about copy precedes its photo pair on mobile.

## Elevation & Depth

Flat color regions, photographs and one-pixel rules carry structure. The promotion price has no enclosing purchase card. Captions sit below photographs. The floating WhatsApp action uses the sole persistent shadow (`0 6px 20px #0004`) to distinguish it from underlying content.

Controls transition color, background and border over .2s. Gallery images scale to 1.025 over .4s with `cubic-bezier(.2,.8,.2,1)`. There is no hero entrance animation. Reduced-motion preferences disable animations and transitions and restore automatic scrolling.

## Shapes

Photographs and content regions are rectangular. Buttons and navigation controls use the control radius; gallery filters, image affordances and gift labels use the compact radius. Lightbox controls are circles. The floating contact action becomes a 48px circle on mobile. One-pixel rules organize service entries, price rows and contact details.

## Components

### Buttons

Direct and practical. Primary actions use Workshop Red and white text. Outlined actions use transparent fill and a gray border. Shared minimum height is 54px with frontmatter padding. Hover darkens the primary background or raises the outline background; active buttons move down 1px. Focus uses a 3px current-color outline offset by 5px. Delivery overrides the primary button to white with dark red text, with a pale pink hover state.

### Chips

Gallery filters have a 44px minimum height. Hover uses Raised Graphite; the selected state inverts to Silver White with Near Black text and is exposed by `aria-pressed`. Gift labels are smaller passive Graphite tags.

### Cards / Containers

Service entries and promotion items are open text groups with top rules. Delivery prices are vertically stacked, horizontally aligned label/value rows with top and bottom rules. The promotion image, price, payment details and button sit directly in the page composition without a card fill or enclosing border.

### Navigation

The sticky Near Black header uses an 88px desktop content height and a bottom rule. Navigation is 13px semibold with 44px minimum-height links and a lightly outlined contact link. Hover turns links light red. At 900px, the header becomes 78px tall and a 44px menu toggle reveals stacked navigation on Graphite. Escape closes the menu and restores focus.

### Visit Strip

A top-ruled strip immediately below the hero exposes location, hours and WhatsApp. Icons accompany muted supporting information and brighter semibold labels. At 900px the WhatsApp entry is hidden while the other two remain side by side; at 760px all three return in a vertical arrangement.

### Gallery Lightbox

The full-viewport near-black dialog centers the photograph and its caption with circular navigation and close controls. Arrow keys navigate images, focus stays within the dialog, and closing restores focus to the opening image button.

### Service Catalogue

The service catalogue is a flat Graphite section with a comparison table for car sizes, a separate motorcycle price, native disclosure rows for included items and ruled additional-service lists. Currency is declared in the table caption to keep narrow columns readable; cells expose complete BRL prices through accessible labels. The layout becomes one column at 1000px and keeps the table legible down to 320px. PDF download and WhatsApp consultation remain explicit actions. Styles are scoped in `Catalog.module.css`; the catalogue inherits the global palette and type roles.

## Do's and Don'ts

### Do:
- **Do** retain the black, graphite, silver and red automotive identity.
- **Do** put real service photography and practical contact information in the foreground.
- **Do** use condensed headings at a scale that leaves room for photographs.
- **Do** maintain visible keyboard focus and respect reduced motion.
- **Do** use varied open compositions, ruled menus and distinct color regions.

### Don't:
- **Don't** reproduce promotional posters as the web page composition.
- **Don't** replace real-work evidence with invented results or unsupported before-and-after imagery.
- **Don't** add decorative overlays that obscure the vehicles or workshop.
