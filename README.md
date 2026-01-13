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

Twilio configuration is now stored securely in your system keychain. On first run, click the "⚙️ Twilio Settings" button in the app to configure:

- **Account SID**: Your Twilio account SID
- **Auth Token**: Your Twilio authentication token  
- **From Phone Number**: Your Twilio phone number (in E.164 format, e.g., +1234567890)

The credentials are stored encrypted in:
- **macOS**: Keychain
- **Windows**: Credential Vault
- **Linux**: Secret Service API (libsecret)

> **Note**: For development or as a fallback, you can still use environment variables by creating a `.env` file with `TWILIO_SID`, `TWILIO_TOKEN`, and `TWILIO_FROM`.

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

## Publishing

To publish the DMG to an S3 bucket:

```bash
./scripts/publish-s3.sh --bucket <bucket> --prefix <prefix> --profile <profile>
```

### Options

| Option | Description |
|--------|-------------|
| `--bucket` | S3 bucket name (required) |
| `--prefix` | S3 key prefix, e.g., `releases/mac` (required) |
| `--profile` | AWS CLI profile name (required) |

### Example

```bash
./scripts/publish-s3.sh --bucket mycompany-releases --prefix sms-sender/mac --profile production
```

This uploads:
- The DMG file
- `latest-mac.yml` (for electron-updater auto-updates)
- `.blockmap` file (for delta updates)
