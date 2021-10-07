using System;

public static class LogAnalysis 
{
    public static string SubstringAfter(this string str, string delimeter) {
        return str.Split(delimeter)[1];
    }

    public static string SubstringBetween(this string str, string firstDelimeter, string secondDelimeter) => "not implemented";
    
    public static string Message(this string str) => "not implemented";

    public static string LogLevel(this string str) => "not implemented";
}