import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./styles/global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>name</h1>
          <p>post</p>
        </main>
      </div>
    </div>
  );
}
