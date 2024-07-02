import { access, constants } from 'fs';
import chalk from 'chalk';

// 文件夹同名检测
export default function (name: string): Promise<boolean> {
    return new Promise((resolve) => {
        access(name, constants.F_OK, error => {
            if (error) {
                resolve(true);
            } else {
                console.log(chalk.red(`The ${name} folder already exists in the current directory. Please try to use another project name!`));
                console.log(chalk.red(`名为${name}的文件夹在当前文件夹下已存在.请尝试使用其他名字为项目命名!`));
                process.exit(1);
            }
        });
    });
}
