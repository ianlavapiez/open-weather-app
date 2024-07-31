# Contribution rules

## Structure

Check out the [Application Structure](app-structure.md) for logical organization.

## Commits

**Every** commit **must** include the following:

```
<type>[optional scope]: <description>
```

See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more information.

This is really important because it helps to others to easily understand and automation. Also, helps to create release notes.

## Language

Use Typescript for all files you create. Avoid using generic types (such as `any`, `unknown`, `Function`, etc.) as much as possible. Please use the exact types and mark field optional only if it is really optional. And vice versa: do not mark field optional if it's guaranteed to be always set.

## Code style

The `prettier` tool controls the code style.

Try to always order things in the alphabetical order. Especially react component's properties declaration and specification. Believe it or not, but it helps to read and find things 10x faster.

Avoid creating big components and files in general. If the file size is 100 lines or less that's ok. If it's about 150 lines - that's fine too, but you should really consider splitting it. If it's 200 lines and more - you must split it.

See [Naming](naming.md) document to learn more about naming conventions.
