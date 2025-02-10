import webpack, { RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.js', '.ts', '.tsx');
    config.module?.rules?.push(buildCssLoader(true)); 

    if(config.module && config.module.rules){
    config.module.rules = config.module.rules
    .filter((rule): rule is RuleSetRule => Boolean(rule))
    .map((rule) => {
        if(/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i}
        }
        return rule;
    })
    }

    config.module?.rules?.push(
        {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )

    return config
}