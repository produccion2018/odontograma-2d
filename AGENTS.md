<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Odontograma
- Geometría, tipos y datos FDI viven en `src/lib/odontogram/`; los componentes en `src/components/odontogram/` solo dibujan y manejan eventos, para poder cambiar la anatomía sin tocar la lógica.
- El estado del odontograma se guarda como tenant -> paciente -> piezas, para no mezclar datos entre empresas.
