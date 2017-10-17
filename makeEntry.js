/*
* 生成frame,component entry目录， 并写入在对应模块文件中供webpack打包分割用
*
*
*
* */
const Fs = require('fs');
const Path = require('path');
const Walk = require('walk');

const frameConfig = {
    path:'./src/page/frame/',
    entry: '_maif.js',
    myLoader: {
        FRAME: {
            name: "title",
            matchReg: /<\s*template\s+title\s*=\s*['"](.*)['"]\s*>/
        }
    }
};
const componentPath = {
    path:'./src/page/component/',
    entry: '_maif.js'
};

function buildWebpackLoader (name,fullName) {
    return `const ${name} = resolve => require.ensure([],() => resolve(require('./${fullName}')), '${name}');\n`;
}

function buildLoaderData(ta) {

    task.myLoader.forEach(function (val1,index1) {
        let tempData = {};
        val1.structure.forEach(function (val2,index2) {

            tempData[baseName] = {};
            tempData[baseName][val2.name] = tempfile.toString().match(val2.matchReg)[1];
        });


        myLoaderString +=
            content += `const ${val1} = ${tempData.toString()}`;
    });


}


function run(task) {
    let moduleContent = "";
    let walker = Walk.walk(task.path);
    let myLoaderData = (function(){
        //根据loader构建目录数据
        if(task.myLoader !== "undefined" && task.myLoader.length!==0){
            let tempData = {};
            for(let k in task.myLoader){
                tempData[k] = {};
            }
            return tempData;
        }
        return null;
    })();

   // console.log(myLoaderData);


    walker.on("file", function (root, fileStats, next) {
        let fullName = fileStats.name;
        let baseName = Path.basename(fileStats.name).split(".")[0];
        let extName = Path.extname(fileStats.name).replace(".","");
        if(extName === "vue"){
            moduleContent += buildWebpackLoader(baseName,fullName);
            //myLoader配置组件需要写入对应的配置对象信息
            if(myLoaderData !== null && myLoaderData.length !==0){

                let tempfile = Fs.readFileSync(task.path + fullName);

                for(let k in myLoaderData){
                    let tempObj = {};
                    tempObj[task.myLoader[k].name] = tempfile.toString().match(task.myLoader[k].matchReg)[1];
                    myLoaderData[k][baseName]= tempObj;
                }
            }
            // content += `const ${val1} = ${tempData.toString()}`;
        }
        next();

    });

    walker.on("errors", function (root, nodeStatsArray, next) {

        next();
    });

    walker.on("end", function () {
        let fileContent = Fs.readFileSync(task.path + task.entry);
        let myLoaderContent = "";
        for(let k in myLoaderData){
            myLoaderContent += `const ${k} = ` +  JSON.stringify(myLoaderData[k], null, 2) + ";\n";
        }

        Fs.writeFileSync(
            task.path + task.entry.substr(1,task.entry.length),
            moduleContent + myLoaderContent + fileContent);
    });

}

run(frameConfig);