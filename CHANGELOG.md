# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-04-29

### Added
- Forms section with `input` variant across all color schemes (black, white, light, dark, primary, secondary, info, success, warning, danger).
- Keyboard configuration on form inputs: `keyboardType`, `keyboardAppearance`, `returnKeyType`, `autocapitalization`, `autocorrect`, `passwordMask`, `clearOnEdit`, `enableReturnKey`, `suppressReturn`, `maxLength`, `autofillType`.
- Type bundles for forms (`text`, `email`, `password`, `number`, `decimal`, `phone`, `url`, `search`) that auto-configure keyboard, password masking, and autocorrect.
- `update()` helper on component views to update multiple elements at once.
- `createTikitTextField` and `createTikitTextArea` factories.
- `module` and `classes` propagation through card sub-elements (title, subtitle, text, name, image).

### Changed
- All section windows now use iOS large title navigation (`ios:auto-adjust-scroll-view-insets`, `ios:extend-edges-all`, `ios:large-title-enabled`) instead of `extend-safe-area-false` + `nav-bar-hidden`.
- ScrollView containers now use `content-h-auto` for proper sizing.
- Forms color tokens darkened: `primary-400` → `primary-800/900`, `secondary-400` → `secondary-800/900`, `hint-text-primary-200` → `hint-text-primary-300`.
- Demo button spacing in `buttons` section adjusted from `mt-4` to `m-4` on horizontal containers.

### Removed
- `autocorrect-false` utility class (autocorrect is now configured per-input through `args.autocorrect`).
