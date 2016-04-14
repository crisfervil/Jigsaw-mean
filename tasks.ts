import jigs = require("jigsaw");
import path = require("path");
import ncp = require("ncp");
import Promise = require("promise");

export class BuildTasks extends jigs.TaskSet {
    @jigs.task("after-build")
    installDependencies(context: jigs.TaskExecutionContext) {

        // TODO: create a after-install task?

        //Copy "copy"" folder
        console.log("copying files...");
        var source = path.join(__dirname, "copy");
        var dest = process.cwd();
        ncp.ncp(source, dest, error => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("done");
            }
        });

        // Copy aditional files
        var files = [{src:"node_modules/es6-shim/es6-shim.min.js",dest:"public/js/es6-shim/"},
                     {src:"node_modules/systemjs/dist/system-polyfills.js",dest:"public/js/systemjs/"},
                     {src:"node_modules/angular2/es6/dev/src/testing/shims_for_IE.js",dest:"public/js/angular2/"},
                     {src:"node_modules/angular2/bundles/angular2-polyfills.js",dest:"public/js/angular2/"},
                     {src:"node_modules/systemjs/dist/system.src.js",dest:"public/js/systemjs/"},
                     {src:"node_modules/rxjs/bundles/Rx.js",dest:"public/js/rxjs/"},
                     {src:"node_modules/angular2/bundles/angular2.dev.js",dest:"public/js/angular2/"},];


        // TODO: create package.json if doesn't exist

        // TODO: update package.json
        // add "start": "node ./bin/www"

    }
}