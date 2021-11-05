import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Search from "../../components/Search";
import api from "../../services";
import App from "../../App";
import MockAdapter from "axios-mock-adapter";
import Providers from "../../providers/";

const apiMock = new MockAdapter(api);

describe("Search Page", () => {
  it("Should search for a Address", async () => {
    apiMock.onGet("81720050").replyOnce(200, {
      bairro: "Xaxim",
      cidade: "Curitiba",
      logradouro: "Rua Osni Silveira",
      estado_info: {
        area_km2: "199.307,985",
        codigo_ibge: "41",
        nome: "Paraná",
      },
      cep: "81720050",
      cidade_info: {
        area_km2: "435,036",
        codigo_ibge: "4106902",
      },
      estado: "PR",
    });
    render(
      <Providers>
        <App />
      </Providers>
    );
    const input = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByText("Buscar pelo CEP");

    fireEvent.change(input, { target: { value: "81720050" } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByDisplayValue("Rua Osni Silveira")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Xaxim")).toBeInTheDocument();
    });
  });
});
