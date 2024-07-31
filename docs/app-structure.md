# Application Structure

Please start from reading the [How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) article. The approach described below is based on the ideas from it. (_We technically replaced `scene` into `pages` in this app_).

## Organizing pages and components

Page is a logically independent part of the application. For component page specific, we create it inside the folder of the page lives.

Each page has the following files:

- `index.tsx`.

All components should be in files called after the component. E.g. `Weather.tsx` for Weather component. The only exception is a main exported component, i.e. a component located in `/src/shared/` or `/src/pages` which uses the `index.ts` approach for easier imports.

If component has a css styles, those files should be called after the component with a `.css` suffixes. This is for a better deletion in future incase a component doesn't need anymore. We just simply delete the component along with its styles.

See more information about naming conventions in the [Naming](naming.md) document.
