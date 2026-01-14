# Contributing to DataHaven Ecosystem

We welcome contributions to the DataHaven Ecosystem! This repository powers the public directory information.

## How to Add Your Project

1.  **Fork the Repository**: Create your own fork of this repository.
2.  **Create a Branch**: Create a new branch for your project (e.g., `add-my-project`).
3.  **Add Project Data**:
    - Create a directory in `projects/` with your project slug (e.g., `projects/my-cool-project/`).
    - Add a `json` file with the same name (e.g., `projects/my-cool-project/my-cool-project.json`).
    - Follow the schema defined in `schemas/project.ts`. You can look at `projects/example-project/example-project.json` for reference.
4.  **Add Logos**:
    - Add your logo files strictly following the size and format requirements.
    - Reference them in your JSON file.
5.  **Validate**: Run the validation script to ensure your data is correct.
    ```bash
    bun test
    ```
6.  **Pull Request**: Submit a Pull Request to the `main` branch.

## Development

- **Install Dependencies**: `bun install`
- **Run Validation**: `bun test`
