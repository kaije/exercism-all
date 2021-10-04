class SpaceAge(object):
    def __init__(self, seconds):
        self.seconds = seconds

    def age_in_planet_years(self, orbital_period_in_earth_years):
        SECONDS_PER_EARTH_YEAR = 31557600
        seconds_per_planet_year = SECONDS_PER_EARTH_YEAR * orbital_period_in_earth_years
        return round(self.seconds / seconds_per_planet_year, 2)

    def on_mercury(self):
        return self.age_in_planet_years(0.2408467)

    def on_venus(self):
        return self.age_in_planet_years(0.61519726)

    def on_earth(self):
        return self.age_in_planet_years(1)

    def on_mars(self):
        return self.age_in_planet_years(1.8808158)

    def on_jupiter(self):
        return self.age_in_planet_years(11.862615)

    def on_saturn(self):
        return self.age_in_planet_years(29.447498)

    def on_uranus(self):
        return self.age_in_planet_years(84.016846)

    def on_neptune(self):
        return self.age_in_planet_years(164.79132)
