# DDOmics editorial design system

## Intent

DDOmics uses the calm, spacious editorial logic of contemporary research publishing while remaining recognisably its own lab: warm paper grounds, deep microbial green, scientific imagery and direct, readable language. This is not a reproduction of another institution's identity.

## Layout

- **Wide canvas:** 1280px maximum for visual and two-column compositions.
- **Reading measure:** 768px maximum for long-form statements and biographies.
- **Spacing scale:** 8, 16, 24, 32, 48, 64, 96, 128 and 160px. Section spacing should use the larger values; internal element spacing should use the smaller values.
- **Structure:** introduce pages with one decisive statement, then alternate image/text compositions with open space and thin rules. Avoid enclosing ordinary content in cards.

## Typography

- **Display:** an editorial serif treatment for major statements and section titles. Use regular weight and compact tracking.
- **Interface and body:** Manrope provides a clear, accessible sans-serif for navigation, labels and reading copy.
- **Eyebrows:** uppercase, small, widely tracked labels identify a section before its heading.
- **Hierarchy:** one large page statement, a restrained supporting lede, then clearly separated section headings. Do not use several competing headline sizes in the same visual field.

## Colour and imagery

- `#F7F5EF` paper is the default page ground; `#EBECE5` creates a quiet chapter change.
- `#173F3A` is the DDOmics deep-green anchor for high-emphasis sections and the footer.
- Use existing microscopy, laboratory, cohort and network imagery as large compositional elements. Crop images with purpose and pair each with a concise text block.
- Rules are subtle `#C9CEC6`; shadows and rounded panels are exceptions, not the default language.

## Components

- Navigation is sticky, concise, and collapses to a focused mobile menu.
- Links use a fine underlined editorial treatment and a restrained arrow movement.
- Research, publication and news lists use dividers and chronology before cards.
- The footer has only three jobs: identify the lab, make contact easy, and offer primary routes.
- Reveal motion is short and optional; `prefers-reduced-motion` removes animation.

## Responsive rules

- At 720px and below, all two-column image/text compositions become one sequence with image first.
- Preserve generous vertical rhythm on mobile but reduce side gutters to 24px.
- Headline sizing uses `clamp()` to stay assertive without wrapping into unreadable fragments.
- Hover-only feedback is never required to understand or reach a destination.

## Content patterns

- **Research:** statement → alternating research tracks → facilities/workflows → call to collaborate.
- **People:** lab statement → PI → grouped roster → alumni. The digital-infrastructure credit is labelled **Lead Systems Architect & Developer**.
- **Publications:** featured studies first, then filters and a chronological full list.
- **News:** latest three on the home page; full archive on the news route.
