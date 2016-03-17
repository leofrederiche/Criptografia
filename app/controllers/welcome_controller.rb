class WelcomeController < ApplicationController

  def index
    @dolar = ValidaDolarUol.coletar.values[1].gsub(",", ".").to_f
    @name = :name
  end
end