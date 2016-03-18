import jigs = require("jigsaw");
import path = require("path");
import {sys} from "./sys";

export class BuildTasks extends jigs.TaskSet {
  @jigs.task("after-build")
  installDependencies(context:jigs.TaskExecutionContext){
    sys.installDependencies(context.appDef);
  }
}
