

<button type="submit" class="botao">
    <slot></slot>
</button>

<style>
    .botao {
        padding: 15px 25px;
        border-radius: 8px;
        border: none;
        background: #2e80fa;
        line-height: 22px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        width: 100%;
        justify-content: center;

        transition: background-color 0.2s;

        display: flex;
        align-items: center;
        gap: 13px; /* Espaçamento entre o texto e o ícone */
    }
        @media (max-width: 600px) {
        .botao {
            width: 100%;
            justify-content: center;
        }
    }
        .botao:hover {
        background: #4590ff;
    }
</style>