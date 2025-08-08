import { glob } from "glob";
import { validateProject } from "../../schemas/project";

async function main() {
  console.log(
    `************************************ Validate Projects! ************************************`
  );
  const paths = await glob(`${process.env.PWD}/projects/**/*.json`, {
    ignore: "**/node_modules/**",
  });

  const total = paths.length;

  console.log(`Found ${total} projects`);

  let counter = 0;

  for (const path of paths) {
    const { default: project } = await import(path, {
      assert: { type: "json" },
    });
    console.log(
      `Validating project ${project.id}. Progress: [${++counter}/${total}]`
    );

    const validationResult = validateProject(project);

    if (!validationResult.success) {
      console.error(
        `Validation failed for project "${project.id}" with errors:`
      );
      console.error(validationResult.error);
      throw new Error(`Project validation failed. Project ID: ${project.id}`);
    }
  }
}

main().then(() => console.log("done"));
