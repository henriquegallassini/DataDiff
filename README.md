# 🎂 DataDiff

> Calculadora de idade em JavaScript puro — calcula anos, meses e dias exatos entre duas datas, sem depender de nenhuma biblioteca.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/status-concluído-brightgreen)

---

## 📸 Exemplo

**Entrada:**
```
Nascimento: 25/03/2000
Hoje:       10/08/2026
```

**Saída:**
```
Você tem 26 anos, 4 meses e 16 dias
```

---

## ✨ O que faz

Você informa sua data de nascimento e a data de hoje, e o projeto calcula sua idade **exata** — não é só subtrair os anos, ele lida com os casos que quebram calculadoras simples:

- 📅 Dia atual menor que o dia de nascimento (ex: nasceu dia 25, hoje é dia 10)
- 📆 Mês atual menor que o mês de nascimento (ex: nasceu em novembro, hoje é agosto)

## 🧠 A lógica por trás

O coração do projeto é o cálculo com **"empréstimo"** — a mesma ideia da subtração manual que a gente aprende na escola (tipo "pedir emprestado" na conta de subtrair de dois números). Quando dia ou mês dá negativo, pega emprestado uma unidade da casa seguinte:

```javascript
// Se os dias ficaram negativos, empresta do mês
if (diaA - diaN < 0) {
    const diasMesAnterior = new Date(anoA, mesA - 1, 0).getDate();
    dia += diasMesAnterior;
    mes -= 1;
}

// Se os meses ainda ficaram negativos, empresta do ano
if (mes < 0) {
    mes += 12;
    ano -= 1;
}
```

O truque `new Date(ano, mes - 1, 0)` é um comportamento nativo do JavaScript: passar dia `0` retorna o **último dia do mês anterior** — resolvendo fevereiro (28/29 dias) e meses de 30/31 dias sem precisar de tabela manual.

## 🚀 Como usar

```bash
git clone https://github.com/henriquegallassini/DataDiff.git
```

1. Abra `Calculator_age.html` no navegador
2. Preencha data de nascimento e data atual
3. Clique em calcular e veja sua idade exata

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML | Estrutura do formulário |
| CSS | Estilização |
| JavaScript | Lógica de cálculo e manipulação do DOM |

## 🗺️ Próximos passos

- [ ] Validar datas inválidas (dia 31 em fevereiro, mês 13...)
- [ ] Bloquear data de nascimento no futuro
- [ ] Deixar responsivo pra mobile

## 👤 Autor

Feito por [Henrique Gallassini](https://github.com/henriquegallassini) — estudando lógica de programação e JavaScript.
