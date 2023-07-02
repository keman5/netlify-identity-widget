import { h, Component } from "preact";

class Provider extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    this.props.onLogin(this.props.provider.toLowerCase());
  };

  render() {
    const { page, provider, label, t } = this.props;

    return (
      <button
        onClick={this.handleLogin}
        className={`provider${provider} btn btnProvider`}
      >
        {`${t("continue_with")} ${label}`} {page.signup ? '注册': '登录'}
      </button>
    );
  }
}

export default class Providers extends Component {
  getLabel(p) {
    const pId = p.toLowerCase();
    if (pId in this.props.labels) {
      return this.props.labels[pId];
    }
    return p;
  }

  render() {
    const { page, providers, onLogin, t } = this.props;

    return (
      <div className="providersGroup">
        <hr className="hr" />
        {providers.map((p) => (
          <Provider
            key={p}
            page={page}
            provider={p}
            label={this.getLabel(p)}
            onLogin={onLogin}
            t={t}
          />
        ))}
      </div>
    );
  }
}
