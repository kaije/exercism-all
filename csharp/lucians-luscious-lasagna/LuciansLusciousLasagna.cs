class Lasagna
{
    public int ExpectedMinutesInOven() => 40;

    public int RemainingMinutesInOven(int elapsedMinutesInOven) => ExpectedMinutesInOven() - elapsedMinutesInOven;

    public int PreparationTimeInMinutes(int numLayers) => 2 * numLayers;

    public int ElapsedTimeInMinutes(int numLayers, int elapsedMinutesInOven) => PreparationTimeInMinutes(numLayers) + elapsedMinutesInOven;
}
