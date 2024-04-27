import { BoxIcon } from "lucide-react";
import { BrazilIcon, DjangoIcon, DockerIcon, EnglandIcon, FastApiIcon, FlaskIcon, GitIcon, KerasIcon, KubernetesIcon, LangchainIcon, LinuxIcon, NextjsIcon, NumpyIcon, PandasIcon, PythonIcon, ScikitlearnIcon, TailwindcssIcon, TensorflowIcon } from ".";

export default function getIcon(icon: string) {
    switch (icon) {
      case "python":
        return PythonIcon;
      case "docker":
        return DockerIcon;
      case "nextjs":
        return NextjsIcon;
      case "pt":
        return BrazilIcon;
      case "en":
        return EnglandIcon;
      case "tailwindcss":
        return TailwindcssIcon;
      case "linux":
        return LinuxIcon;
      case "git":
        return GitIcon;
      case "kubernetes":
        return KubernetesIcon;
      case "fastapi":
        return FastApiIcon;
      case "django":
        return DjangoIcon;
      case "flask":
        return FlaskIcon;
      case "numpy":
        return NumpyIcon;
      case "pandas":
        return PandasIcon;
      case "scikitlearn":
        return ScikitlearnIcon;
      case "keras":
        return KerasIcon;
      case "tensorflow":
        return TensorflowIcon;
      case "langchain":
        return LangchainIcon;
      default:
        return BoxIcon;
    }
  }