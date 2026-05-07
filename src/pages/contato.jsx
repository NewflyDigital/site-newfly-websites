import * as React from "react";
import Menu from "../components/menu2";
import Rodape from "../components/rodape";
import styles from "../styles/Contato.module.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "# 9aff3c",
    },
  },
});

export default function Contato() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [setor, setSetor] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [showAlertSuccess, setShowAlertSuccess] = React.useState(false);
  const [showAlertDanger, setShowAlertDanger] = React.useState(false);
  const [error, setError] = React.useState({});
  const [disableButton, setDisableButton] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const nome = data.get("nome");
    const email = data.get("email");
    const setor = data.get("setor");

    let isValid = true;
    const newError = { ...error };

    if (email.trim() === "") {
      newError.email = true;
      isValid = false;
    }

    if (nome.trim() === "") {
      newError.nome = true;
      isValid = false;
    }

    if (setor.trim() === "") {
      newError.setor = true;
      isValid = false;
    }

    setError(newError);

    if (!isValid) return;

    setDisableButton(true);

    SendContato({
      nome,
      email,
      setor,
      mensagem,
    })
      .then((retorno) => {
        const { status } = retorno;

        if (status === 201) {
          setShowAlertSuccess(true);
        } else {
          setShowAlertDanger(true);
        }
      })
      .catch(() => setShowAlertDanger(true))
      .finally(() => {
        setNome("");
        setEmail("");
        setSetor("");
        setMensagem("");
        setDisableButton(false);
      });
  };

  async function SendContato({ nome, email, setor, mensagem }) {
    const response = await fetch("/api/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, setor, mensagem }),
    });
    return {
      status: response.status,
      data: await response.json(),
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />

      {/* HERO */}
      <section className={styles.heroContato}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Fale com a gente</h1>
          <p>Vamos transformar sua ideia em um projeto que gera resultados.</p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.sectionContato}>
        <div className={styles.containerContato}>
          {/* ESQUERDA */}
          <div className={styles.infoContato}>
            <h2>
              Vamos conversar sobre <span>seu projeto</span>
            </h2>

            <p>
              Nossa equipe une estratégia, design e tecnologia para criar
              soluções digitais que realmente geram clientes e crescimento.
            </p>

            <div className={styles.cardsContato}>
              <div className={styles.cardContato}>
                <h4>Telefone</h4>
                <p>+55 54 9 9999 9999 </p>
              </div>

              <div className={styles.cardContato}>
                <h4>Email</h4>
                <p>contato@newflydigital.com.br</p>
              </div>

              <div className={styles.cardContato}>
                <h4>Endereço</h4>
                <p>Caxias do Sul - RS</p>
              </div>
            </div>
          </div>

          {/* DIREITA */}
          <div className={styles.formContato}>
            <h3>Envie sua mensagem</h3>
            <p>Respondemos o mais rápido possível</p>

            <Box
              component="form"
              sx={{ width: "100%" }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className={styles.row}>
                <TextField
                  value={nome || ""}
                  fullWidth
                  label="Nome"
                  name="nome"
                  onChange={(e) => setNome(e.target.value)}
                  error={error.nome}
                  helperText={error.nome ? "campo obrigatório" : ""}
                />

                <TextField
                  value={email || ""}
                  fullWidth
                  label="E-mail"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  error={error.email}
                  helperText={error.email ? "campo obrigatório" : ""}
                />
              </div>

              <div className={styles.row}>
                <FormControl fullWidth error={error.setor}>
                  <InputLabel>Setor *</InputLabel>
                  <Select
                    value={setor || ""}
                    label="Setor *"
                    onChange={(e) => setSetor(e.target.value)}
                  >
                    <MenuItem value="comercial">Comercial</MenuItem>
                    <MenuItem value="financeiro">Financeiro</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <TextField
                value={mensagem || ""}
                fullWidth
                label="Mensagem"
                multiline
                rows={4}
                onChange={(e) => setMensagem(e.target.value)}
                sx={{ marginTop: "1rem" }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={disableButton}
                className={styles.botaoEnviar}
              >
                Enviar mensagem
              </Button>
            </Box>
          </div>
        </div>
      </section>

      <Rodape />

      {/* ALERTAS */}
      <Snackbar
        open={showAlertSuccess}
        autoHideDuration={6000}
        onClose={() => setShowAlertSuccess(false)}
      >
        <Alert severity="success">Seu contato foi enviado com sucesso!</Alert>
      </Snackbar>

      <Snackbar
        open={showAlertDanger}
        autoHideDuration={6000}
        onClose={() => setShowAlertDanger(false)}
      >
        <Alert severity="warning">Não foi possível enviar o contato!</Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
