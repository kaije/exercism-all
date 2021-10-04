class Lasagna
{
    public int ExpectedMinutesInOven() {
        return 40;
    }

    public int RemainingMinutesInOven(int ActualMinutesInOven) {
        return this.ExpectedMinutesInOven() - ActualMinutesInOven;
    }

    public int PreparationTimeInMinutes(int NumLayers) {
        return 2 * NumLayers;
    }

    public int ElapsedTimeInMinutes(int NumLayers, int ActualMinutesInOven) {
        return PreparationTimeInMinutes(NumLayers) + ActualMinutesInOven;
    }
}
