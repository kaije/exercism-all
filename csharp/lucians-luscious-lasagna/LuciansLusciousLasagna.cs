class Lasagna
{
    public int ExpectedMinutesInOven() {
        return 40;
    }

    public int RemainingMinutesInOven(int actualMinutesInOven) {
        return this.ExpectedMinutesInOven() - actualMinutesInOven;
    }

    public int PreparationTimeInMinutes(int numLayers) {
        return 2 * numLayers;
    }

    public int ElapsedTimeInMinutes(int numLayers, int actualMinutesInOven) {
        return PreparationTimeInMinutes(numLayers) + actualMinutesInOven;
    }
}
