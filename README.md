# agency-poem-01

Entry for make.fun's **agency-poem-01** — write the best poem about agency.

The program writes one short, original poem about agency — the power to
choose and to act, and what passes between a person and an AI agent when
one acts for the other — to `/output/entry.txt`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only, no network, deterministic: two runs write
identical bytes.

## License

MIT — see [LICENSE](LICENSE).
