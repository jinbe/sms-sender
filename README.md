# sms

An Electron application with Svelte and TypeScript. At the moment I've only got signing instructions for MacOS. Windows will be added shortly.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Project Setup

### Install

```bash
$ pnpm install
```

### Development

```bash
$ pnpm dev
```

### Build

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```

## Config

Create ~/.env with the following

```
TWILIO_FROM=
TWILIO_SID=
TWILIO_TOKEN=
```

## Signing

Create ~/electron-builder.env with the following

```
APPLE_TEAM_ID=
APPLE_ID=
APPLE_APP_SPECIFIC_PASSWORD=
APPLE_BUNDLE_ID=
CSC_NAME=
CSC_IDENTITY_AUTO_DISCOVERY=true
```
