import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";
import '@testing-library/jest-dom';

describe("Hero component", () => {
  test("renders the hero section with correct content", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});