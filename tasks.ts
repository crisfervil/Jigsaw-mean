import jigs = require("jigsaw");
import path = require("path");
import ncp = require("ncp");

export class BuildTasks extends jigs.TaskSet {
    @jigs.task("after-build")
    installDependencies(context: jigs.TaskExecutionContext) {

        //Copy "copy"" folder
        console.log("copying files...");
        var source = path.join(__dirname, "copy");
        var dest = process.cwd();
        ncp.ncp(source, dest, error => {
            if (error) {
                console.log("error");
            }
            else {
                console.log("done");
            }
        });

        // TODO: create package.json if doesn't exist

        // TODO: update package.json
        // "start": "node ./bin/www"

    }
}
