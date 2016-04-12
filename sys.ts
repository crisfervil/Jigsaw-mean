/// <reference path="typings/main.d.ts" />
import fs = require("fs");
import path = require("path");

export class sys {
    public static installDependencies(processDir, appDef) {
        console.log("installing dependencies...");
        if (appDef && appDef.system && appDef.system.dependencies) {
            var dependencies = appDef.system.dependencies;
            for (var propName in dependencies) {
                // check if is already installed
                if (!fs.existsSync(path.join(processDir, "node_modules", propName))) {
                    var modName = propName, modVersion = dependencies[propName];
                    var modNameAndVersion = `${modName}@${modVersion}`;
                    console.log(modNameAndVersion);
                    if (modVersion == "link") {
                        sys.linkModule(modName);
                    }
                    else {
                        sys.installModule(modNameAndVersion);
                    }
                }
            }
        }
    }

    private static linkModule(moduleName) {
        const command = ['npm', 'link', moduleName].join(' ');
        const exec = require('child_process').execSync;

        // TODO: handle errors
        const stdout: Buffer = exec(command);
    }

    private static installModule(moduleNameAndVersion) {
        const command = ['npm', 'install', moduleNameAndVersion, '--save'].join(' ');
        const exec = require('child_process').execSync;

        // TODO: handle errors
        const stdout: Buffer = exec(command);
    }

}
