def to_rna(dna_strand):
    rna_strand = ''
    for nucleotide in dna_strand:
        rna_strand = rna_strand + convert(nucleotide)
    return rna_strand

def convert(dna_nucleotide):
    if dna_nucleotide == 'G':
        return 'C'
    elif dna_nucleotide == 'C':
        return 'G'
    elif dna_nucleotide == 'T':
        return 'A'
    elif dna_nucleotide == 'A':
        return 'U'
    else:
        raise Exception("Invalid input")
